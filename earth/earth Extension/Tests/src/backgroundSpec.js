describe('saveHistory function', () => {
    beforeEach(() => {
        jasmine.Ajax.install();
    });

    afterEach(() => {
        jasmine.Ajax.uninstall();
    });

    it('should send a POST request with the correct data', async () => {
        // Define test data
        const history = 'https://example.com';
        const base_url = 'https://api.example.com';
        const uid = 'user123';
        const machineid = 'machine456';

        // Mock the fetch response using jasmine-ajax
        const successResponse = {
            status: 200,
            responseText: 'Success',
        };

        jasmine.Ajax.stubRequest(`${base_url}/saveurl`).andReturn(successResponse);

        // Call the saveHistory function
        const result = await saveHistory(history, base_url, uid, machineid);

        // Expectations
        expect(result).toBe('Success');

        // Verify that the request was made with the expected parameters
        const request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe(`${base_url}/saveurl`);
        expect(request.method).toBe('POST');
        expect(request.data()).toEqual({
            url: history,
            machineid: machineid,
            uid: uid,
        });
    });
});

