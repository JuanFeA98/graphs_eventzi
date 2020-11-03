function firstChart(ctx) {
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [1, 20, 50, 60],
            datasets: [
                {
                    label: "A",
                    data: [1, 20, 30, 40]
                },
                {
                    label: "B",
                    data: [1, 40, 50, 60]
                },
                {
                    label: "C",
                    data: [1, 60, 100, 140]
                },
            ]
        }
    })
}


function secondChart(ctx) {
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 20, 50, 60],
            datasets: [
                {
                    label: "A",
                    data: [1, 20, 30, 40]
                },
                {
                    label: "B",
                    data: [1, 40, 50, 60]
                },
                {
                    label: "C",
                    data: [1, 60, 100, 140]
                },
            ]
        }
    })
}


function thirdChart(ctx) {
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [1, 20, 50, 60],
            datasets: [
                {
                    label: "A",
                    data: [20, 20, 30]
                }

            ]
        }
    })
}


function renderCharts() {
    const ctx = document.getElementById('chart').getContext('2d');
    firstChart(ctx)
}

function renderCharts2() {
    const ctx = document.getElementById('chart2').getContext('2d');
    secondChart(ctx)
}

function renderCharts3() {
    const ctx = document.getElementById('chart3').getContext('2d');
    thirdChart(ctx)
}

renderCharts()
renderCharts2()
renderCharts3()

