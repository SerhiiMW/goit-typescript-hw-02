/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(user: User, initialValues: Partial<User>) {
  return { ...user, ...initialValues };
}

const user1 : User = {
  name: '',
  surname: '',
  email: '',
  password: '',
  };

const updateUser = createOrUpdateUser (user1 ,{ email: 'user@mail.com', password: 'password123' });

export {};