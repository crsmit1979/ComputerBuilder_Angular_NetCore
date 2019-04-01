using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication6.Model;
using WebApplication6.Models;

namespace WebApplication6.DataLayer
{
    public interface IDataService
    {
        IEnumerable<ComputerSpec> GetAllComputerSpecs();
        IEnumerable<Cpu> GetAllCPU();
        IEnumerable<Memory> GetAllMemory();
        IEnumerable<PowerSupply> GetAllPowerSupply();
        IEnumerable<GraphicsCard> GetAllGraphicsCard();
        IEnumerable<WeightUnit> GetAllWeightUnit();
        IEnumerable<HDDSize> GetAllHDDSize();
        ComputerSpec GetComputerSpec(int id);
    }

    public class DataService : IDataService
    {
        private readonly WebApplication6Context _context;
        public DataService(WebApplication6Context context)
        {
            this._context = context;
        }
        public IEnumerable<Cpu> GetAllCPU()
        {
            return this._context.Cpu.Select(e=>e).ToList();
        }
        public IEnumerable<WeightUnit> GetAllWeightUnit()
        {
            return this._context.WeightUnit.Select(e => e).ToList();
        }
        public IEnumerable<HDDSize> GetAllHDDSize()
        {
            return this._context.HDDSize.Select(e => e).ToList();
        }
        public IEnumerable<Memory> GetAllMemory()
        {
            return this._context.Memory.Select(e => e).ToList();
        }
        public IEnumerable<PowerSupply> GetAllPowerSupply()
        {
            return this._context.PowerSupply.Select(e => e).ToList();
        }
        public IEnumerable<GraphicsCard> GetAllGraphicsCard()
        {
            return this._context.GraphicsCard.Select(e => e).ToList();
        }
        public ComputerSpec GetComputerSpec(int id)
        {
            return this._context.Computer
                .Where(w => w.Id == id)
                .Select(e => new ComputerSpec()
                {
                    Id = e.Id,
                    CPU = e.Cpu.Description,
                    CPUId = e.Cpu.Id,
                    Memory = e.Memory.Description,
                    MemoryId = e.MemoryId,
                    HDDSize = e.HddSize.Description,
                    HddSizeId = e.HDDSizeId,
                    GraphicsCard = e.GraphicsCard.Description,
                    GraphicsCardId = e.GraphicsCardId,
                    PowerSupplyId = e.PowerSupplyId,
                    PowerSupply = e.PowerSupply.Description,
                    Weight = e.Weight,
                    WeightUnitId = e.WeightUnitId,
                    WeightUnit = e.WeightUnit.Description
                })
                .FirstOrDefault();
        }
        public IEnumerable<ComputerSpec> GetAllComputerSpecs()
        {
            return this._context.Computer
                .Select(e => new ComputerSpec()
                {
                    Id = e.Id,
                    CPU = e.Cpu.Description,
                    CPUId = e.Cpu.Id,
                    Memory = e.Memory.Description,
                    MemoryId = e.MemoryId,
                    HDDSize = e.HddSize.Description,
                    HddSizeId = e.HDDSizeId,
                    GraphicsCard = e.GraphicsCard.Description,
                    GraphicsCardId = e.GraphicsCardId,
                    PowerSupplyId= e.PowerSupplyId,
                    PowerSupply = e.PowerSupply.Description,
                    Weight = e.Weight,
                    WeightUnitId = e.WeightUnitId,
                    WeightUnit = e.WeightUnit.Description
                }).ToList();

        }
    }
}
