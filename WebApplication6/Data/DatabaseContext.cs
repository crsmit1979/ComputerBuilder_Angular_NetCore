using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication6.Model;

namespace WebApplication6.Models
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
        public virtual DbSet<WebApplication6.Model.Cpu> Cpu { get; set; }
        public virtual DbSet<WebApplication6.Model.Computer> Computer { get; set; }
        public virtual DbSet<WebApplication6.Model.Memory> Memory { get; set; }
        public virtual DbSet<WebApplication6.Model.HDDSize> HDDSize { get; set; }
        public virtual DbSet<WebApplication6.Model.PowerSupply> PowerSupply { get; set; }
        public virtual DbSet<WebApplication6.Model.GraphicsCard> GraphicsCard { get; set; }
        public virtual DbSet<WebApplication6.Model.USB> USB { get; set; }
        public virtual DbSet<WebApplication6.Model.WeightUnit> WeightUnit { get; set; }

    }
}
