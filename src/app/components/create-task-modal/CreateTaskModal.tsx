import React, {FC, memo} from 'react';
import {format} from 'date-fns';
import {useFormik} from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Task} from '_types/common';
import {VIEW_DATE_TIME} from '_consts/common';
import {Button, TextField} from '@material-ui/core';
import {LABELS} from '../../consts';

type Props = {
    isOpen: boolean;
};

const now = format(new Date(), VIEW_DATE_TIME);

const CreateTaskModal: FC<Props> = ({isOpen}) => {
    const form = useFormik<Partial<Task>>({
        initialValues: {
            title: '',
            body: '',
            start_at: now,
            end_at: '',
        },
        onSubmit: () => {
            // В аргументах приходят values. Ждем задачи со сторами для формы
        },
    });

    return (
        <Dialog open={isOpen}>
            <form onSubmit={form.handleSubmit}>
                <DialogTitle id="form-dialog-title">{LABELS.CREATE_TASK}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={form.values.title}
                        id="title"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.TITLE}
                        fullWidth
                    />
                    <TextField
                        value={form.values.body}
                        id="body"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.DESCRIPTION}
                        rowsMax={4}
                        multiline
                        fullWidth
                    />
                    <TextField
                        id="start_at"
                        value={form.values.start_at}
                        label={LABELS.START_AT}
                        type="datetime-local"
                        onChange={form.handleChange}
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <TextField
                        id="end_at"
                        value={form.values.end_at}
                        label={LABELS.END_AT}
                        type="datetime-local"
                        onChange={form.handleChange}
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" type="button">
                        {LABELS.CANCEL}
                    </Button>
                    <Button color="primary" type="submit">
                        {LABELS.CREATE}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default memo(CreateTaskModal);
