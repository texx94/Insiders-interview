import { CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import './PresentationCard.css'

interface PresentationCardProps {
  title: string,
  children: string | JSX.Element | JSX.Element[],
}

export default function PresentationCard(props: PresentationCardProps) {
  return (
    <div className="mui-card">
      <Card>
        <CardHeader className="card-title" title={props.title} />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </div>
  );
}