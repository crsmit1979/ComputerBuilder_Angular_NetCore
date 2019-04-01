using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication6.Model;

namespace WebApplication6.Models
{
    public class WebApplication6Context : DbContext
    {
        public WebApplication6Context (DbContextOptions<WebApplication6Context> options)
            : base(options)
        {
        }

        public DbSet<WebApplication6.Model.Cpu> Cpu { get; set; }
        public DbSet<WebApplication6.Model.Computer> Computer { get; set; }
        public DbSet<WebApplication6.Model.Memory> Memory { get; set; }
        public DbSet<WebApplication6.Model.HDDSize> HDDSize { get; set; }
        public DbSet<WebApplication6.Model.PowerSupply> PowerSupply { get; set; }
        public DbSet<WebApplication6.Model.GraphicsCard> GraphicsCard { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
            modelBuilder.Entity<Cpu>().ToTable("tblCpu");
            modelBuilder.Entity<Memory>().ToTable("tblMemory");
            modelBuilder.Entity<HDDSize>().ToTable("tblHDDSize");
            modelBuilder.Entity<WeightUnit>().ToTable("tblWeightUnit");
            modelBuilder.Entity<Computer>().ToTable("tblComputer");
            modelBuilder.Entity<PowerSupply>().ToTable("tblPowerSupply");
            modelBuilder.Entity<GraphicsCard>().ToTable("tblGraphicsCard");*/
            base.OnModelCreating(modelBuilder);
        }
    }
}
