export const getStatus = (startTimeString: string, endTimeString: string) => {

    const startTime = new Date(startTimeString)
    const endTime = new Date(endTimeString)
    const currentTime = new Date()

    if (currentTime > endTime) {
        return 'Complete'
    }

    if (currentTime > startTime) {
        return 'Active'
    }

    return 'Scheduled'
}