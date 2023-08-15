using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIController:ControllerBase
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??=HttpContext.RequestServices.GetService<IMediator>();

    }
}