using Microsoft.EntityFrameworkCore;
using ComputerStore.Models;
using ComputerStore.Model;

namespace ComputerStore.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext (DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }
        public DatabaseContext()
        {

        }
        public virtual DbSet<Cpu> Cpu { get; set; }
        public virtual DbSet<Computer> Computer { get; set; }
        public virtual DbSet<Memory> Memory { get; set; }
        public virtual DbSet<HDDSize> HDDSize { get; set; }
        public virtual DbSet<PowerSupply> PowerSupply { get; set; }
        public virtual DbSet<GraphicsCard> GraphicsCard { get; set; }
        public virtual DbSet<USB> USB { get; set; }
        public virtual DbSet<WeightUnit> WeightUnit { get; set; }

    }
}
