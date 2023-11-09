import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'

interface PresentationCardProps {
  title: string;
}

export default function PresentationCard(props: PresentationCardProps) {
  return (
    <div className="mui-card">
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          {/* children ? */}
        </CardContent>
      </Card>
    </div>
  );
}