const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createWorks(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const titleService = faker.name.titleService();
    const areaService = faker.name.areaService();
    const modalityJob = faker.name.modalityJob();
    const specialtyService = faker.name.specialtyService();
    const locationJob = faker.name.locationJob();
    const timeService = faker.name.timeService();
    const rateJob = faker.name.rateJob();
    const TimeRateJob = faker.name.TimeRateJob();
    const descriptionService = faker.name.descriptionService();
    const dataSkills = faker.name.dataSkills();
    const urgentJob = faker.name.urgentJob();

    result.push({
      id: faker.random.uuid(),
      titleService,
      areaService,
      modalityJob,
      specialtyService,
      locationJob,
      timeService,
      rateJob,
      TimeRateJob,
      descriptionService,
      dataSkills,
      urgentJob,
    });
  }

  return result;
}

function main() {
  const data = {
    works: createWorks(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
