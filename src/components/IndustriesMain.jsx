import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Industries from './Industries';
import IndustryDetail from './IndustryDetail';

const IndustriesMain = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleBack = () => {
    setSelectedIndustry(null);
  };

  return (
    <AnimatePresence mode="wait">
      {selectedIndustry ? (
        <motion.div
          key="detail"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.3 }}
        >
          <IndustryDetail industry={selectedIndustry} onBack={handleBack} />
        </motion.div>
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
        >
          <Industries onIndustrySelect={handleIndustrySelect} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IndustriesMain;