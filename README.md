# ngStore

## Setting up the database
1. Make sure you have Entity Framework Core .NET Command-line Tools using NuGet
2. Run `dotnet ef migrations add InitialCreate` in project directory using Powershell 
2. Run `dotnet ef database update` in project directory using Powershell
3. Run script Database -> Database -> ngStoreData in SQL Server 
4. In the config.json file edit server ngStoreConnectionString to use your server
### You all set!
