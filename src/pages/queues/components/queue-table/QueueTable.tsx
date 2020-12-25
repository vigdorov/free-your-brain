import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import React, {memo} from 'react';

const rows = [
    'Очередь №1',
    'Тестовая очередь',
    'Старая очередь',
    'Не новая очередь',
    'Прошлая очередь',
];

const QueueTable: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell component="th">№</TableCell>
                        <TableCell component="th">Название очереди</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row}>
                            <TableCell scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{row}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(QueueTable);
