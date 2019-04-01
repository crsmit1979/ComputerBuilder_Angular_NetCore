using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication6.Model;
using WebApplication6.Models;

namespace WebApplication6.DataLayer
{
    public class DataService
    {
        private readonly WebApplication6Context _context;
        public DataService(WebApplication6Context context)
        {
            this._context = context;
        }

        public IEnumerable<ComputerSpec> GetAllComputerSpecs()
        {
            return this._context.Computer
                .Select(e => new ComputerSpec()
                {
                    Id = e.Id,
                    CPU = e.Cpu.Description,
                    Memory = e.Memory.Description,
                    HDDSize = e.HddSize.Description,
                    GraphicsCard = e.GraphicsCard.Description,
                    PowerSupply = e.PowerSupply.Description,
                    Weight = e.Weight,
                    WeightUnit = e.WeightUnit.Description
                }).ToList();

        }
    }
}
