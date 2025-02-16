import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ContributionGraph = ({ data }) => {
  // Helper function to get color based on contribution count
  const getContributionColor = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 3) return 'bg-green-900';
    if (count <= 6) return 'bg-green-700';
    if (count <= 9) return 'bg-green-500';
    return 'bg-green-300';
  };

  // Generate sample data for demonstration
  const generateSampleData = () => {
    const today = new Date();
    const data = [];
    for (let i = 0; i < 52; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const date = new Date(today);
        date.setDate(today.getDate() - (52 - i) * 7 - (6 - j));
        week.push({
          date,
          count: Math.floor(Math.random() * 12)
        });
      }
      data.push(week);
    }
    return data;
  };

  const contributionData = data || generateSampleData();
  const days = ['Mon', 'Wed', 'Fri'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Card className="w-full max-w-4xl bg-gray-900 text-gray-300">
      <CardHeader>
        <CardTitle className="text-sm font-normal">
          186 contributions in 2025
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          {/* Days labels */}
          <div className="flex flex-col justify-between pr-2 text-xs">
            {days.map(day => (
              <span key={day} className="h-4 leading-4">{day}</span>
            ))}
          </div>
          
          {/* Contribution grid */}
          <div className="flex-1">
            <div className="relative">
              {/* Months labels */}
              <div className="flex justify-between text-xs mb-2">
                {months.map(month => (
                  <span key={month} className="w-8">{month}</span>
                ))}
              </div>
              
              {/* Grid */}
              <div className="flex gap-1">
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)}`}
                        title={`${day.count} contributions on ${day.date.toDateString()}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4 text-xs">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-gray-800" />
                <div className="w-3 h-3 rounded-sm bg-green-900" />
                <div className="w-3 h-3 rounded-sm bg-green-700" />
                <div className="w-3 h-3 rounded-sm bg-green-500" />
                <div className="w-3 h-3 rounded-sm bg-green-300" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionGraph;