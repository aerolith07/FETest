import { getStatus } from "./getStatus";

jest.useFakeTimers()

describe('getStatus', () => {

    it('Returns "Complete" if the current time is after the end time', () => {
        jest.setSystemTime(new Date('2026-06-01T12:00:00Z'));

        const result = getStatus('2023-06-01T12:00:00Z', '2025-06-01T12:00:00Z');

        expect(result).toBe('Complete');
    });

    it('Returns "Active" if the current time is between start and end time', () => {
        jest.setSystemTime(new Date('2024-06-02T00:00:00Z'));

        const result = getStatus('2023-06-01T12:00:00Z', '2025-06-01T12:00:00Z');

        expect(result).toBe('Active');
    });

    it('Returns "Scheduled" if the current time is before the start time', () => {
        jest.setSystemTime(new Date('2022-06-02T12:00:00Z'));

        const result = getStatus('2023-06-01T12:00:00Z', '2025-06-01T12:00:00Z');

        expect(result).toBe('Scheduled');
    });

});