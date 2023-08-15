using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationservices(this IServiceCollection services,IConfiguration config)   
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddDbContext<DataContext>(opt=>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                
            });
            services.AddMediatR(typeof(List.Handler));
 
            services.AddCors(opt =>{
                opt.AddPolicy("CorsPolicy",policy => 
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:5272","http://localhost:3000");
                });
            });
            return services;
        }
    }
}