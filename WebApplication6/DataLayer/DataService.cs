using ComputerStore.Model;
using ComputerStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ComputerStore.DataLayer
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
        IEnumerable<USB> GetAllUSB();

        Computer GetComputerSpec(int id);
        Computer AddComputer(Computer computer);
        Computer UpdateComputer(int id, Computer computer);
        bool DeleteComputer(int id);
    }

    public class DataService : IDataService
    {
        private readonly DatabaseContext _context;
        public DataService(DatabaseContext context)
        {
            this._context = context;
        }

        public IEnumerable<Cpu> GetAllCPU()
        {
            return this._context.Cpu
                .ToList()
                .OrderBy(e => e.Description);
        }

        public IEnumerable<WeightUnit> GetAllWeightUnit()
        {
            return this._context.WeightUnit
                .ToList()
                .OrderBy(e => e.Description);
        }

        public IEnumerable<HDDSize> GetAllHDDSize()
        {
            return this._context.HDDSize
                .ToList()
                .OrderBy(e => e.Description);
        }

        public IEnumerable<Memory> GetAllMemory()
        {
            return this._context.Memory
                .ToList()
                .OrderBy(e => e.Description);
        }

        public IEnumerable<PowerSupply> GetAllPowerSupply()
        {
            return this._context.PowerSupply
                .ToList()
                .OrderBy(e => e.Description);
        }

        public IEnumerable<GraphicsCard> GetAllGraphicsCard()
        {
            return this._context.GraphicsCard
                .ToList()
                .OrderBy(e => e.Description);
        }
        public IEnumerable<USB> GetAllUSB()
        {
            return this._context.USB
                .ToList()
                .OrderBy(e => e.Description);
        }

        public Computer GetComputerSpec(int id)
        {
            return this._context.Computer
                .Where(w => w.Id == id)
                .FirstOrDefault();
        }

        public bool DeleteComputer(int id) {
            try
            {
                Computer recordToDelete = this._context.Computer.Where(e => e.Id == id).FirstOrDefault();
                this._context.Computer.Remove(recordToDelete);
                this._context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
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

        public Computer AddComputer(Computer computer)
        {
            try
            {
                Computer comp = new Computer()
                {
                    CpuId = computer.CpuId,
                    HDDSizeId = computer.HDDSizeId,
                    GraphicsCardId = computer.GraphicsCardId,
                    MemoryId = computer.MemoryId,
                    PowerSupplyId = computer.PowerSupplyId,
                    Weight = computer.Weight,
                    WeightUnitId = computer.WeightUnitId
                };
                this._context.Computer.Add(comp);
                this._context.SaveChanges();
                return comp;
            }
            catch
            {
                throw new Exception("Problem inserting computer record");
            }
        }

        public Computer UpdateComputer(int id, Computer computer)
        {
            Computer record = this._context.Computer.Where(e => e.Id == id).FirstOrDefault();
            if (record != null)
            {
                record.CpuId = computer.CpuId;
                record.GraphicsCardId = computer.GraphicsCardId;
                record.HDDSizeId = computer.HDDSizeId;
                record.MemoryId = computer.MemoryId;
                record.PowerSupplyId = computer.PowerSupplyId;
                record.WeightUnitId = computer.WeightUnitId;
                record.Weight = computer.Weight;
            }
            else
            {
                throw new Exception("Record not found");
            }
            this._context.SaveChanges();
            //this._context.Computer.Update(record);
            return record;

        }
    }
}
