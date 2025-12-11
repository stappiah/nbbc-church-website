import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

interface InterestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupName: string;
  onSubmit: (formData: { name: string; email: string }) => void;
}

export const InterestFormModal: React.FC<InterestFormModalProps> = ({
  isOpen,
  onClose,
  groupName,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Reset form when modal is closed or group changes
  useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email });
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} PaperProps={{ component: 'form' }} onSubmit={handleSubmit}>
      <DialogTitle>Join {groupName}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Express your interest by filling out the form below. The group leader will get in touch with you soon!
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
