using NUnit.Framework;
using Moq;
using System.Linq;
using ComputerStore.Model;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using ComputerStore.Models;
using ComputerStore.DataLayer;

namespace Tests
{
    public class TestDataService
    {
        Mock<DatabaseContext> mockContext = new Mock<DatabaseContext>();
        #region mock Data
        IEnumerable<Cpu> mockCpuData = new List<Cpu>()
            {
                new Cpu() {Id=1, Description="Cpu1"},
                new Cpu() {Id=2, Description="Cpu2"}
            }.AsQueryable();

        IEnumerable<Memory> mockMemoryData = new List<Memory>()
            {
                new Memory() {Id=1, Description="Memory1"},
                new Memory() {Id=2, Description="Memory2"}
            }.AsQueryable();

        IEnumerable<HDDSize> mockHDDSizeData = new List<HDDSize>()
            {
                new HDDSize() {Id=1, Description="HddSize1"},
                new HDDSize() {Id=2, Description="HddSize2"}
            }.AsQueryable();

        IEnumerable<PowerSupply> mockPowerSupplyData = new List<PowerSupply>()
            {
                new PowerSupply() {Id=1, Description="Power1"},
                new PowerSupply() {Id=2, Description="Power2"}
            }.AsQueryable();

        IEnumerable<WeightUnit> mockWeightUnitData = new List<WeightUnit>()
            {
                new WeightUnit() {Id=1, Description="lbs"},
                new WeightUnit() {Id=2, Description="kg"}
            }.AsQueryable();

        IEnumerable<GraphicsCard> mockGraphicsCardData = new List<GraphicsCard>()
            {
                new GraphicsCard() {Id=1, Description="GraphicCard1"},
                new GraphicsCard() {Id=2, Description="GraphicCard2"}
            }.AsQueryable();
        #endregion

        [SetUp]
        public void Setup()
        {
            //create mock database sets
            var mockSetCpu = new Mock<DbSet<Cpu>>();
            var mockSetMemory = new Mock<DbSet<Memory>>();
            var mockSetHDDSize = new Mock<DbSet<HDDSize>>();
            var mockSetPowerSupply = new Mock<DbSet<PowerSupply>>();
            var mockSetWeightUnit = new Mock<DbSet<WeightUnit>>();
            var mockSetGraphicsCard = new Mock<DbSet<GraphicsCard>>();

            //setup the mock data that each property in dbcontext needs to return
            mockSetCpu.As<IQueryable<Cpu>>().Setup(e => e.GetEnumerator()).Returns(mockCpuData.GetEnumerator());
            mockSetMemory.As<IQueryable<Memory>>().Setup(e => e.GetEnumerator()).Returns(mockMemoryData.GetEnumerator());
            mockSetHDDSize.As<IQueryable<HDDSize>>().Setup(e => e.GetEnumerator()).Returns(mockHDDSizeData.GetEnumerator());
            mockSetPowerSupply.As<IQueryable<PowerSupply>>().Setup(e => e.GetEnumerator()).Returns(mockPowerSupplyData.GetEnumerator());
            mockSetGraphicsCard.As<IQueryable<GraphicsCard>>().Setup(e => e.GetEnumerator()).Returns(mockGraphicsCardData.GetEnumerator());
            mockSetWeightUnit.As<IQueryable<WeightUnit>>().Setup(e => e.GetEnumerator()).Returns(mockWeightUnitData.GetEnumerator());

            mockContext.Setup(x => x.Cpu).Returns(mockSetCpu.Object);
            mockContext.Setup(x => x.Memory).Returns(mockSetMemory.Object);
            mockContext.Setup(x => x.HDDSize).Returns(mockSetHDDSize.Object);
            mockContext.Setup(x => x.PowerSupply).Returns(mockSetPowerSupply.Object);
            mockContext.Setup(x => x.GraphicsCard).Returns(mockSetGraphicsCard.Object);
            mockContext.Setup(x => x.WeightUnit).Returns(mockSetWeightUnit.Object);
        }

        [Test]
        public void TestGetAllCPUReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            // when
            var records = service.GetAllCPU();

            //then
            Assert.AreEqual(2, records.Count());
        }

        [Test]
        public void TestGetAllMemoryReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            //when
            var records = service.GetAllMemory();

            //then
            Assert.AreEqual(2, records.Count());
        }

        [Test]
        public void TestGetAllGraphicsCardReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            //when
            var records = service.GetAllGraphicsCard();

            //then
            Assert.AreEqual(2, records.Count());
        }

        [Test]
        public void TestGetAllHDDSizeReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            //when
            var records = service.GetAllHDDSize();

            //then
            Assert.AreEqual(2, records.Count());
        }

        [Test]
        public void TestGetAllWeightUnitReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            //when
            var records = service.GetAllWeightUnit();

            //then
            Assert.AreEqual(2, records.Count());
        }

        [Test]
        public void TestGetAllPowerSupplyReturnsData()
        {
            // given
            var service = new DataService(mockContext.Object);

            //when
            var records = service.GetAllPowerSupply();

            //then
            Assert.AreEqual(2, records.Count());
        }
    }
}