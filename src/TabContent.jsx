// TabContent.jsx
import React from 'react';
const TabContent = ({ tabId, activeTab, children }) => {
    if (tabId !== activeTab) {
        return null;
    }

    return (
        <div id={tabId} className="tab-pane active">
            {children}
        </div>
    );
};

export default TabContent;