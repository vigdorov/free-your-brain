import React, {memo} from 'react';
import QueueTable from '../queue-table/QueueTable';

const QueuesPage: React.FC = () => {
    return (
        <div>
            <div>Queues Page (d)</div>
        <QueueTable />
        </div>
    );
};

export default memo(QueuesPage);
