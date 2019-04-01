using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication6.DataLayer;
using WebApplication6.Model;
using WebApplication6.Models;

namespace WebApplication6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CpusController : ControllerBase
    {
        private readonly DataService _dataService;

        public CpusController(DataService dataService)
        {
            _dataService = dataService;
        }

        // GET: api/Cpus
        [HttpGet]
        public IEnumerable<ComputerSpec> GetCpu()
        {
            return this._dataService.GetAllComputerSpecs();
        }
        /*
        // GET: api/Cpus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cpu>> GetCpu(int id)
        {
            var cpu = await _context.Cpu.FindAsync(id);

            if (cpu == null)
            {
                return NotFound();
            }

            return cpu;
        }

        // PUT: api/Cpus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCpu(int id, Cpu cpu)
        {
            if (id != cpu.Id)
            {
                return BadRequest();
            }

            _context.Entry(cpu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CpuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cpus
        [HttpPost]
        public async Task<ActionResult<Cpu>> PostCpu(Cpu cpu)
        {
            _context.Cpu.Add(cpu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCpu", new { id = cpu.Id }, cpu);
        }

        // DELETE: api/Cpus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cpu>> DeleteCpu(int id)
        {
            var cpu = await _context.Cpu.FindAsync(id);
            if (cpu == null)
            {
                return NotFound();
            }

            _context.Cpu.Remove(cpu);
            await _context.SaveChangesAsync();

            return cpu;
        }

        private bool CpuExists(int id)
        {
            return _context.Cpu.Any(e => e.Id == id);
        }*/
    }
}
