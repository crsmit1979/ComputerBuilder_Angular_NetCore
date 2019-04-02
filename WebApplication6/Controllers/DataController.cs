using System;
using System.Collections.Generic;
using ComputerStore.DataLayer;
using ComputerStore.Model;
using Microsoft.AspNetCore.Mvc;

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
        [Route("computer")]
        public IEnumerable<ComputerSpec> GetAllComputerSpecs([FromQuery] string search="")
        {
            return this._dataService.GetAllComputerSpecs(search);
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
            if ((!computer.HddSizeId.HasValue) || 
                (!computer.MemoryId.HasValue) || 
                (!computer.PowerSupplyId.HasValue) ||
                (!computer.WeightUnitId.HasValue) || 
                (!computer.GraphicsCardId.HasValue) ||
                (!computer.CPUId.HasValue)) {
                throw new Exception("Computer fields not correct");
            }
            Computer newComputer = new Computer()
            {
                CpuId = computer.CPUId.Value,
                HDDSizeId = computer.HddSizeId.Value,
                GraphicsCardId = computer.GraphicsCardId.Value,
                MemoryId = computer.MemoryId.Value,
                PowerSupplyId = computer.PowerSupplyId.Value,
                Weight = computer.Weight,
                WeightUnitId = computer.WeightUnitId.Value
            };

            return this._dataService.AddComputer(newComputer);
        }
        [HttpPut]
        [Route("computers/{id}")]
        public Computer UpdateComputer(int id, [FromBody] ComputerSpec computer)
        {
            if ((!computer.HddSizeId.HasValue) ||
                (!computer.MemoryId.HasValue) ||
                (!computer.PowerSupplyId.HasValue) ||
                (!computer.WeightUnitId.HasValue) ||
                (!computer.GraphicsCardId.HasValue) ||
                (!computer.CPUId.HasValue))
            {
                throw new Exception("Computer fields not correct");
            }
            Computer newComputer = new Computer()
            {
                CpuId = computer.CPUId.Value,
                HDDSizeId = computer.HddSizeId.Value,
                GraphicsCardId = computer.GraphicsCardId.Value,
                MemoryId = computer.MemoryId.Value,
                PowerSupplyId = computer.PowerSupplyId.Value,
                Weight = computer.Weight,
                WeightUnitId = computer.WeightUnitId.Value
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
        [Route("cpu")]
        public IEnumerable<Cpu> GetAllCPU()
        {
            return this._dataService.GetAllCPU();
        }

        [HttpGet]
        [Route("memory")]
        public IEnumerable<Memory> GetAllMemory()
        {
            return this._dataService.GetAllMemory();
        }

        [HttpGet]
        [Route("powersupply")]
        public IEnumerable<PowerSupply> GetAllPowerSupply()
        {
            return this._dataService.GetAllPowerSupply();
        }
        [HttpGet]
        [Route("graphicscard")]
        public IEnumerable<GraphicsCard> GetAllGraphicsCard()
        {
            return this._dataService.GetAllGraphicsCard();
        }
        [HttpGet]
        [Route("usb")]
        public IEnumerable<USB> GetAllUSB()
        {
            return this._dataService.GetAllUSB();
        }
        [HttpGet]
        [Route("weightunit")]
        public IEnumerable<WeightUnit> GetAllWeightUnit()
        {
            return this._dataService.GetAllWeightUnit();
        }
        [HttpGet]
        [Route("hddsize")]
        public IEnumerable<HDDSize> GetAllHDDSize()
        {
            return this._dataService.GetAllHDDSize();
        }
    }
}
