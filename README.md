# ngStore
A full featured shopping site using Angular 2, DotNet Core, EF Core, Identity and Bootstrap

## Setting up the database
1. In the config.json file edit server ngStoreConnectionString to use your server
2. Make sure you have Entity Framework Core .NET Command-line Tools using NuGet
3. Delete the Migrations directory in the project if it exists
4. Run `dotnet ef migrations add InitialCreate` in project directory using Powershell 
5. Run `dotnet ef database update` in project directory using Powershell
6. Run script Database -> Database -> ngStoreData in SQL Server to add store data 
7. Run the app to seed users and roles
### You all set!
## Login as admin user
User = `admin@ngStore.com`
Password = `P@ssw0d`
