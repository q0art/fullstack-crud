﻿FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Warehouse.Api/Warehouse.Api.csproj", "Warehouse.Api/"]
RUN dotnet restore "Warehouse.Api/Warehouse.Api.csproj"
COPY . .
WORKDIR "/src/Warehouse.Api"
RUN dotnet build "Warehouse.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Warehouse.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Warehouse.Api.dll"]
