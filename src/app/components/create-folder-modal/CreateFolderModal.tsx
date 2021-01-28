import {Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Theme} from '@material-ui/core';
import {useFormik} from 'formik';
import React, {FC, memo} from 'react';
import {LABELS} from '../../consts';
import {FolderType} from '../../../core/enums/common';
import {Folder} from '../../../core/types/common';

type Props = {
    isOpen: boolean,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: '100%',
          },
    }),
);

const CreateFolderModal: FC<Props> = ({isOpen}) => {
    const classes = useStyles();
    const form = useFormik<Partial<Folder>>({
        initialValues: {
            name: '',
            type: undefined,
        },
        onSubmit: () => {
            // В аргументах приходят values. Ждем задачи со сторами для формы
        },
    });
    return (
        <Dialog open={isOpen}>
            <form onSubmit={form.handleSubmit}>
                <DialogTitle id="form-dialog-title">{LABELS.CREATE_FOLDER}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={form.values.name}
                        id="name"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.NAME}
                        fullWidth
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-simple-select-label">{LABELS.TYPE_FOLDER}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={form.values.type}
                            onChange={form.handleChange}
                            id="demo-simple-select"
                        >
                            <MenuItem value={FolderType.Information}>{FolderType.Information}</MenuItem>
                            <MenuItem value={FolderType.Project}>{FolderType.Project}</MenuItem>
                        </Select>
                    </FormControl>
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

export default memo(CreateFolderModal);
