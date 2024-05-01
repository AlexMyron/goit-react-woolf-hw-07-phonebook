import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts;
export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.items.length
      ? contacts.items.filter(({ name }) =>
          name.toLowerCase().startsWith(filter.toLowerCase())
        )
      : [];
  }
);

export const selectIsLoading = ({ contacts: { isLoading } }) => isLoading;

export const selectError = ({ contacts: { error } }) => error;
