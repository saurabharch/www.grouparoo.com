import { Container, Row, Col, Table } from "react-bootstrap";
import ComparisonRow from "./ComparisonRow";

export default function ComparisonTable({ comparisonChartData }) {
  let tableRows = comparisonChartData.data.map((feature) => (
    <ComparisonRow key={feature.feature} rowData={feature} />
  ));

  return (
    <Table
      id="featureComparisons"
      className="mx-auto col-xs-9 customTable text-center"
    >
      <thead>
        <tr>
          <th></th>
          <th>Grouparoo</th>
          <th>{comparisonChartData.competitor}</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
  );
}
