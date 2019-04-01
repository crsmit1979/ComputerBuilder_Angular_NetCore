using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication6.Model
{
    
    [Table("tblCPU")]
    public class Cpu
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblWeightUnit")]
    public class WeightUnit
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblMemory")]
    public class Memory
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblPowerSupply")]
    public class PowerSupply
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblGraphicsCard")]
    public class GraphicsCard
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblHDDSize")]
    public class HDDSize
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
    }
    [Table("tblComputer")]
    public class Computer
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("HDDSize")]
        public int HDDSizeId { get; set; }
        public virtual HDDSize HddSize { get; set; }


        [ForeignKey("Cpu")]
        public int CpuId { get; set; }
        public virtual Cpu Cpu { get; set; }

        [ForeignKey("Memory")]
        public int MemoryId { get; set; }
        public virtual Memory Memory { get; set; }

        [ForeignKey("WeightUnit")]
        public int WeightUnitId { get; set; }
        public virtual WeightUnit WeightUnit { get; set; }

        [Column("Weight")]
        public decimal Weight { get; set; }

        [ForeignKey("GraphicsCard")]
        public int GraphicsCardId { get; set; }
        public GraphicsCard GraphicsCard { get; set; }

        [ForeignKey("PowerSupply")]
        public int PowerSupplyId { get; set; }
        public PowerSupply PowerSupply { get; set; }
    }

    public class ComputerSpec
    {
        public int Id { get; set; }
        public int MemoryId { get; set; }
        public string Memory { get; set; }
        public int CPUId { get; set; }
        public string CPU { get; set; }
        public int HddSizeId { get; set; }
        public string HDDSize { get; set; }
        public decimal Weight { get; set; }
        public int WeightUnitId { get; set; }
        public string WeightUnit { get; set; }
        public int PowerSupplyId { get; set; }
        public string PowerSupply { get; set; }
        public int GraphicsCardId { get; set; }
        public string GraphicsCard { get; set; }
    }
}
