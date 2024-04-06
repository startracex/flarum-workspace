# Flarum workspace

Merging the root of this repository with a flarum root will create a flarum workspace

## Development

Add composer path repository `packages/*`

```sh
composer config repositories.0 path "packages/*"
```

Install php dependencies

```sh
composer install
```

Install js dependencies

```sh
pnpm install
```
