# SDC - PhotoCarousel

> SDC database optimization

## Related Projects

  - https://github.com/TeamForeman/ReservationsService
  - https://github.com/TeamForeman/Reviews
  - https://github.com/TeamForeman/places-to-stay


## Table of Contents

1. [CRUD](#crud_api)
1. [Requirements](#requirements)



## CRUD_API
*All URLs must be prefixed with /api*
Action | METHOD | URL
-------|--------|----
Create a listing | POST | carousel-module/photos/
Retrieve a listing | GET | carousel-module/photos/:id
Change a listing's details | UPDATE | carousel-module/photos/:id
Remove a listing | DELETE | carousel-module/photos/:id

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.18.3

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

