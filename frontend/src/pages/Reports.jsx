import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Pending", value: 5 },
  { name: "In Progress", value: 8 },
  { name: "Resolved", value: 15 },
];

const COLORS = ["#ffc107", "#0d6efd", "#198754"];

function Reports() {
  return (
    <div className="container py-4">

      <h2 className="mb-4">
        Reports & Analytics
      </h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Total Complaints</h5>
              <h2>28</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Resolved</h5>
              <h2 className="text-success">
                15
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Pending</h5>
              <h2 className="text-warning">
                5
              </h2>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow-sm border-0 rounded-4 mt-4">
        <div className="card-body">

          <h4 className="mb-4">
            Complaint Status Overview
          </h4>

          <div
            style={{
              width: "100%",
              height: "400px",
            }}
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={140}
                  label
                >
                  {data.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Reports;