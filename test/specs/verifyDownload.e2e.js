describe('Verify Downloads', () => {
    it('Validate downloads page header text', async () => {
        //to navigate to downloads page
        await browser.url(`chrome://downloads/`);
        //to verify the container downloads-manager is existing
        await expect($('body > downloads-manager')).toBeExisting();
        //to verify the page header located inside shadow DOM using deep selector >>>
        await expect($('>>>#leftSpacer > h1')).toHaveTextContaining('Downloads');
    });
});