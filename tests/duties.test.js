"use strict"
"use strict"
const request = require('supertest');
const app = require('../src/server');

describe('Duty API Integration Tests', () => {
  let dutyId;

  it('should create a new duty', async () => {
    const response = await request(app)
      .post('/api/duties')
      .send({ name: 'New Duty' })
      .expect(201);
    expect(response.body.name).toEqual('New Duty');
    dutyId = response.body.id; // Assuming the duty ID is returned in the response
  });

  it('should retrieve a duty by ID', async () => {
    const response = await request(app)
      .get(`/api/duties/${dutyId}`)
      .expect(200);
    expect(response.body.id).toEqual(dutyId);
    expect(response.body.name).toEqual('New Duty');
  });

  it('should update a duty', async () => {
    const response = await request(app)
      .put(`/api/duties/${dutyId}`)
      .send({ name: 'Updated Duty' })
      .expect(200);
    expect(response.body.name).toEqual('Updated Duty');
  });

  it('should delete a duty', async () => {
    await request(app)
      .delete(`/api/duties/${dutyId}`)
      .expect(204);
  });
});
