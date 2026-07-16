import { Component } from "inferno";
import { Link } from "inferno-router";

const placeholderCommunities = [
  "community1",
  "community2",
  "community3",
  "community4",
  "community5",
  "community6",
  "community7",
  "community8",
  "community9",
  "community10",
  "community11",
  "community12",
  "community13",
  "community14",
  "community15",
];

interface CommunitiesBoxState {
  expanded: boolean;
}

export class CommunitiesBox extends Component<unknown, CommunitiesBoxState> {
  state: CommunitiesBoxState = {
    expanded: false,
  };

  render() {
    const shown = this.state.expanded
      ? placeholderCommunities.slice(0, 15)
      : placeholderCommunities.slice(0, 5);

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="fw-bold">Popular Communities</h6>
          <ul className="list-unstyled mb-0">
            {shown.map(c => (
              <li className="mb-1" key={c}>
                <Link to={`/c/${c}`}>{c}</Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mc-see-more"
            onClick={() => this.setState({ expanded: !this.state.expanded })}
          >
            {this.state.expanded ? "See less" : "See more"}
          </button>
        </div>
      </div>
    );
  }
}
