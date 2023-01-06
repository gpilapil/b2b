using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using PMI.B2B.Platform.Application.Services;

namespace PMI.B2B.Platform.Application.Extensions;

public static class ApplicationExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

        services.AddTransient<ISampleService, SampleService>();

        return services;
    }
}