import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { Box, Typography } from "@mui/material";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ваші Контакти
      </Typography>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Box>
  );
}
