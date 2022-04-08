import { Navigate, Route, Routes } from "react-router-dom";
import Grid from "./grid/grid";
import { FeedbackException404 } from "../../common/feedback/feedbackExceptions";

export default function LayoutUI(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/poke" />} />
      <Route path="poke">
        <Route index element={<Grid />} />
      </Route>
      <Route path="*" element={<FeedbackException404 />} />
    </Routes>
  );
}
