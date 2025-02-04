import { useCallback, useMemo, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { ErrorHandler } from "../../utils/errorHandler";
import { isBrowser } from "../../utils/isBrowser";
import styles from "./Subscribe.module.scss";

export const NewSubscribe = ({ campaign }: { campaign: string }) => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const GoogleAdsSubscribeID = process.env.GOOGLE_ADS_SUBSCRIBE_CONVERSION;

  const errorHandler = new ErrorHandler();
  errorHandler.subscribe("result", (e) => {
    let message = e?.message || e.toString();
    if (message.match(/email/i)) {
      message = "Invalid email address.";
    }
    console.log("error", message);
    setError(message);
  });

  const { execApi } = useApi(errorHandler);

  const onSubmit = useCallback(
    async (data) => {
      setLoading(true);

      data.source = window?.location?.hostname || "grouparoo website";
      data.medium = "web";
      data.campaign = campaign;

      if (isBrowser() && globalThis?.gtag) {
        globalThis.gtag("event", "conversion", {
          send_to: GoogleAdsSubscribeID,
          event_callback: () => {},
        });
      }

      const response = await execApi("post", `/api/v1/subscribers`, data);
      if (response?.subscriber) setSubscribed(true); // TODO: should we set a cookie to hide this later?

      setLoading(false);
    },
    [GoogleAdsSubscribeID, campaign, execApi]
  );

  const form = useMemo(
    () =>
      subscribed ? null : (
        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <Row className="pb-2">
            <Col md={8} sm={8} xs={12}>
              <Form.Group>
                <Form.Control
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  defaultValue=""
                  disabled={loading}
                />
                <div style={{ fontSize: "smaller", color: "red" }}>{error}</div>
              </Form.Group>
            </Col>
            <Col md={4} sm={4} xs={12}>
              <Button
                type="submit"
                variant="secondary"
                className={`rounded-pill ${styles.subscribe}`}
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Form>
      ),
    [error, handleSubmit, loading, onSubmit, register, subscribed]
  );
  const content = useMemo(
    () =>
      subscribed
        ? "You have been subscribed. Talk to you soon!"
        : "We will let you know about product updates and new content.",
    [subscribed]
  );

  return (
    <Row>
      <Col>
        <h3>Stay up to date</h3>
        <p>{content}</p>
        {form}
      </Col>
    </Row>
  );
};
