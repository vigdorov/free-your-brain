import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import {useFormik} from 'formik';
import React, {FC, memo} from 'react';
import {LABELS} from '../../consts';
import {Tag} from '../../../core/types/common';

type Props = {
    isOpen: boolean;
};

const CreateTagModal: FC<Props> = ({isOpen}) => {
    const form = useFormik<Partial<Tag>>({
        initialValues: {
            name: '',
            color: '',
        },
        onSubmit: () => {
            // В аргументах приходят values. Ждем задачи со сторами для формы
        },
    });
    return (
        <Dialog open={isOpen}>
            <form onSubmit={form.handleSubmit}>
                <DialogTitle id="form-dialog-title">{LABELS.CREATE_TAG}</DialogTitle>
                <DialogContent>
                <TextField
                        autoFocus
                        value={form.values.name}
                        id="name"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.TAG}
                        fullWidth
                    />
                    <TextField
                        value={form.values.color}
                        id="color"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.COLOR}
                        multiline
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

export default memo(CreateTagModal);
