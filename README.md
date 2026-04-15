# Dashboard Kit — Laravel React Inertia

A dynamic RBAC (Role-Based Access Control) dashboard starter kit built with Laravel, Inertia.js, and React. Designed to be clean, modular, and ready to use — free for anyone to clone and build on top of.

> Built and maintained by [Wildan Ahmad Fahrezi](https://github.com/Wildan-AhmadF)

---

## Features

- **Dynamic RBAC** — Create roles and assign permissions per role
- **Menu Management** — Add menus dynamically; menus auto-appear in the permission page
- **User Management** — Create users and assign roles
- **Permission Control** — Per-menu permission with `can_view`, `can_create`, `can_edit`, `can_delete`
- **Parent-Child Menu Structure** — Supports nested menus (parent as label, child as permission target)
- **Flexible Database** — Supports SQLite (default) and MySQL via `.env`

---

## Installation

### Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- NPM or Yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Wildan-AhmadF/dashboard-kit.git
cd dashboard-kit

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Copy environment file
cp .env.example .env

# 5. Generate application key
php artisan key:generate

# 6. Run migrations & seeders
php artisan migrate --seed

# 7. Start development server
composer run dev
```

---

## Configuration

### SQLite (Default)

No additional setup needed. The `.env` is already configured to use SQLite out of the box.

```env
DB_CONNECTION=sqlite
# DB_DATABASE is auto-resolved to /database/database.sqlite
```

### MySQL

Update your `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Then run:

```bash
php artisan migrate --seed
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 13 (new version) |
| Frontend | React 19 |
| Bridge | Inertia.js 3 |
| Styling | Tailwind CSS v4 |
| Database | SQLite / MySQL |

---

## ERD

![ERD](./docs/erd.png)

> Table structure:
> - `users` — stores user accounts, linked to a role
> - `roles` — stores available roles (e.g. Admin, Mandor, Kawil, User)
> - `menus` — stores navigation menus with parent-child support
> - `permissions` — stores per-role, per-menu permission flags

---

## Flow

```
Admin creates menus
        |
Admin creates roles
        |
Admin assigns users to a role
        |
Admin opens permission page per role
        |
Permission page shows all menus (parent as label, child/standalone with checkboxes)
        |
Admin checks can_view / can_create / can_edit / can_delete per menu
        |
Permissions saved — applied to all users under that role
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with love by <a href="https://github.com/Wildan-AhmadF">Wildan Ahmad Fahrezi</a></p>