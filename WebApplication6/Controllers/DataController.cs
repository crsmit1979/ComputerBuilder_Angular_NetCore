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
    public class DataController : ControllerBase
    {
        private readonly IDataService _dataService;

        public DataController(IDataService dataService)
        {
            _dataService = dataService;
        }

        // GET: api/Cpus
        [HttpGet]
        [Route("all_computer")]
        public IEnumerable<ComputerSpec> GetAllComputerSpecs()
        {
            return this._dataService.GetAllComputerSpecs();
        }
        [HttpGet]
        [Route("computers/{id}")]
        public Computer GetComputerSpecById(int id)
        {
            return this._dataService.GetComputerSpec(id);
        }
        [HttpPost]
        [Route("computers")]
        public Computer AddComputer([FromBody] ComputerSpec computer)
        {
            Computer newComputer = new Computer()
            {
                CpuId = computer.CPUId,
                HDDSizeId = computer.HddSizeId,
                GraphicsCardId = computer.GraphicsCardId,
                MemoryId = computer.MemoryId,
                PowerSupplyId = computer.PowerSupplyId,
                Weight = computer.Weight,
                WeightUnitId = computer.WeightUnitId
            };

            return this._dataService.AddComputer(newComputer);
        }
        [HttpPut]
        [Route("computers/{id}")]
        public Computer UpdateComputer(int id, [FromBody] ComputerSpec computer)
        {
            Computer newComputer = new Computer()
            {
                CpuId = computer.CPUId,
                HDDSizeId = computer.HddSizeId,
                GraphicsCardId = computer.GraphicsCardId,
                MemoryId = computer.MemoryId,
                PowerSupplyId = computer.PowerSupplyId,
                Weight = computer.Weight,
                WeightUnitId = computer.WeightUnitId
            };

            return this._dataService.UpdateComputer(id, newComputer);
        }
        [HttpDelete]
        [Route("computers/{id}")]
        public bool DeleteComputer(int id)
        {
            return this._dataService.DeleteComputer(id);
        }

        [HttpGet]
        [Route("all_cpu")]
        public IEnumerable<Cpu> GetAllCPU()
        {
            return this._dataService.GetAllCPU();
        }

        [HttpGet]
        [Route("all_memory")]
        public IEnumerable<Memory> GetAllMemory()
        {
            return this._dataService.GetAllMemory();
        }

        [HttpGet]
        [Route("all_powersupply")]
        public IEnumerable<PowerSupply> GetAllPowerSupply()
        {
            return this._dataService.GetAllPowerSupply();
        }
        [HttpGet]
        [Route("all_graphicscard")]
        public IEnumerable<GraphicsCard> GetAllGraphicsCard()
        {
            return this._dataService.GetAllGraphicsCard();
        }
        [HttpGet]
        [Route("all_usb")]
        public IEnumerable<USB> GetAllUSB()
        {
            return this._dataService.GetAllUSB();
        }
        [HttpGet]
        [Route("all_weightunit")]
        public IEnumerable<WeightUnit> GetAllWeightUnit()
        {
            return this._dataService.GetAllWeightUnit();
        }
        [HttpGet]
        [Route("all_hddsize")]
        public IEnumerable<HDDSize> GetAllHDDSize()
        {
            return this._dataService.GetAllHDDSize();
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
