# ngStore

## Setting up the database
1. Make sure you have Entity Framework Core .NET Command-line Tools using NuGet
2. Delete the Migrations directory in the project
3. Run `dotnet ef migrations add InitialCreate` in project directory using Powershell 
4. Run `dotnet ef database update` in project directory using Powershell
5. Run script Database -> Database -> ngStoreData in SQL Server 
6. In the config.json file edit server ngStoreConnectionString to use your server
### You all set!
