export const selectContacts = ({ contacts }) => contacts;

export const selectFilter = ({ filter }) => filter;

export const selectIsLoading = ({ contacts: { isLoading } }) => isLoading;

export const selectError = ({ contacts: { error } }) => error;
