module.exports = {
    async headers() {
        return [
            {
                source: '/app',
                headers: [
                    {
                        key: 'GITHUB_PAGES',
                        value: true,
                    },
                ],
            },
        ]
    },
}