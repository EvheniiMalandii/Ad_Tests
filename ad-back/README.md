# Ad Management Application

## Requirements

-   PHP
-   Composer

## Setup

### Backend (Laravel)

1. Navigate to the `backend` directory.
2. Install dependencies:
    ```bash
    composer install
    ```
3. Up in docker:
    ```bash
    sail up -d
    ```
4. Run migrations:
    ```bash
    sail artisan migrate
    ```
5. Run seeds:
    ```bash
    sail artisan db:seed
    ```
