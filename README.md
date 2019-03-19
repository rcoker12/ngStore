# ngStore

## Setting up the database
1. In the config.json file edit server ngStoreConnectionString to use your server
2. Make sure you have Entity Framework Core .NET Command-line Tools using NuGet
3. Delete the Migrations directory in the project if it exists
4. Run `dotnet ef migrations add InitialCreate` in project directory using Powershell 
5. Run `dotnet ef database update` in project directory using Powershell
6. Run script Database -> Database -> ngStoreData in SQL Server 
### You all set!
