import Vapi from '@vapi-ai/web';

class VapiService {
  constructor() {
    this.vapi = null;
    this.isInitialized = false;
    this.isCallActive = false;
    this.currentLanguage = 'hindi'; // Default to Hindi
    this.volumeCallback = null; // Add this line
    this.messageCallback = null; // Add this line
    this.speechStartCallback = null; // Add this line
    this.speechEndCallback = null; // Add this line
    this.assistantId = import.meta.env.VITE_VAPI_ASSISTAN_ID; // Use the public key from environment variables
  }

  initialize(publicKey) {
    if (!this.isInitialized) {
      this.vapi = new Vapi(publicKey);
      this.setupEventListeners();
      this.isInitialized = true;
    }
  }

  setupEventListeners() {
    if (!this.vapi) return;

    this.vapi.on('call-start', () => {
      console.log('Vaani call started');
      this.isCallActive = true;
    });

    this.vapi.on('call-end', () => {
      console.log('Vaani call ended');
      this.isCallActive = false;
    });

    this.vapi.on('speech-start', () => {
      console.log('Vaani is speaking');
      if (this.speechStartCallback) {
        this.speechStartCallback();
      }
    });

    this.vapi.on('speech-end', () => {
      console.log('Vaani finished speaking');
      if (this.speechEndCallback) {
        this.speechEndCallback();
      }
    });

    // Add volume level listener
    this.vapi.on('volume-level', (volume) => {
      console.log(`Assistant volume level: ${volume}`);
      if (this.volumeCallback) {
        this.volumeCallback(volume);
      }
    });

    this.vapi.on('error', (error) => {
      console.error('Vapi error:', error);
      this.isCallActive = false;
    });

    this.vapi.on('message', (message) => {
      console.log('Vapi message:', message);
      if (this.messageCallback) {
        this.messageCallback(message);
      }
    });
  }

  // Add this method for volume level callback
  onVolumeLevel(callback) {
    this.volumeCallback = callback;
  }

  // Add these methods for message and speech callbacks
  onMessage(callback) {
    this.messageCallback = callback;
  }

  onSpeechStart(callback) {
    this.speechStartCallback = callback;
  }

  onSpeechEnd(callback) {
    this.speechEndCallback = callback;
  }

  setLanguage(language) {
    this.currentLanguage = language;
  }

  startCall(customAssistantId = this.assistantId, language = this.currentLanguage) {
    if (!this.vapi) {
      console.error('Vapi not initialized');
      return;
    }

    // Assistant IDs for different languages
    const assistantIds = {
      hindi: this.assistantId, // Replace with your Hindi assistant ID
      english: this.assistantId, // Replace with your English assistant ID
    };

    // Use custom assistant ID if provided, otherwise use language-specific one
    const assistantId = customAssistantId || assistantIds[language] || assistantIds.english;

    // Optional: Add assistant overrides for customization
    const assistantOverrides = {
      recordingEnabled: true,
      variableValues: {
        language: language,
        userName: 'User' // You can customize this
      },
    };

    // Start the call with assistant ID and overrides
    this.vapi.start(assistantId, assistantOverrides);
  }

  stopCall() {
    if (this.vapi && this.isCallActive) {
      this.vapi.stop();
    }
  }

  toggleMute() {
    if (this.vapi) {
      const currentMuteState = this.vapi.isMuted();
      this.vapi.setMuted(!currentMuteState);
      return !currentMuteState;
    }
    return false;
  }

  sendMessage(message) {
    if (this.vapi && this.isCallActive) {
      this.vapi.send({
        type: 'add-message',
        message: {
          role: 'user',
          content: message,
        },
      });
    }
  }

  getCallStatus() {
    return this.isCallActive;
  }
}

export default new VapiService();