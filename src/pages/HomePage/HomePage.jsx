// export default function HomePage() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Вітаємо у застосунку "Phonebook"</h1>
//       <p>
//         Це зручний сервіс для зберігання та управління вашими контактами. Ви
//         можете:
//       </p>
//       <ul>
//         <li>✅ Додавати нові контакти</li>
//         <li>✅ Шукати за ім'ям</li>
//         <li>✅ Видаляти або редагувати існуючі</li>
//       </ul>
//       <p>Для початку — зареєструйтеся або увійдіть у свій акаунт.</p>
//     </div>
//   );
// }

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function HomePage() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6, textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Вітаємо у застосунку "Phonebook"
      </Typography>
      <Typography variant="body1" gutterBottom>
        Це зручний сервіс для зберігання та управління вашими контактами. Ви
        можете:
      </Typography>
      <List>
        {[
          "Додавати нові контакти",
          "Шукати за ім'ям",
          "Редагувати або видаляти існуючі",
        ].map((text) => (
          <ListItem key={text}>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography sx={{ mt: 2, fontStyle: "italic" }}>
        Для початку — зареєструйтесь або увійдіть у свій акаунт.
      </Typography>
    </Box>
  );
}
